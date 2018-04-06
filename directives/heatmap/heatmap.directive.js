// heatmaps applied to whole table, params example: { columns: [1, 5] }
/*
rgb(227, 136, 133) - max red
rgb(127, 227, 137) - max green

 */

import * as _ from 'lodash';

class HeatmapHandler{

    constructor(el, binding){
        this.el = el;
        this.hasTotalRow = true;
        this.columns = [];
        this.columnNames = [];
        this.reverse = false;
        this.interval = { min: null, max: null };
        if(binding.value){
            this.hasTotalRow = binding.value.totalRow;
            this.interval = binding.value.interval || this.interval;
            this.columnNames = binding.value.columns.map((x) => {
                return this.formatColumnName(x);
            });
        }
        this.initializeColumnIndexes();
    }

    formatColumnName(name){
        name = name.trim().toLowerCase().replace(/[\$,%]/g, '').replace(/\s/, '');
        return name;
    }

    initializeColumnIndexes(){
        this.columns = [];
        let thead = this.el.getElementsByTagName('thead')[0];
        let thCells = thead.getElementsByTagName('tr')[0].getElementsByTagName('th');
        for(let i = 0; i < thCells.length; i++){
            let text = this.formatColumnName(thCells[i].textContent);
            if(this.columnNames.indexOf(text) >= 0){
                this.columns.push(i);
            }
        }
    }

    iterateOverCells(cb, allCells){
        let tbodyObject = this.el.getElementsByTagName('tbody');
        if(tbodyObject.length) {
            let tbody = tbodyObject[0];
            let rows = tbody.getElementsByTagName('tr');
            for(let rx = 0; rx < rows.length; rx++){
                let tr = rows[rx];
                let cells = tr.getElementsByTagName('td');
                if(allCells){
                    for(let i = 0; i < cells.length; i++){
                        cb(cells[i], rx, i);
                    }
                }else{
                    for(let i = 0; i < this.columns.length; i++){
                        let colIndex = this.columns[i];
                        cb(cells[colIndex], rx, colIndex);
                    }
                }
            }
        }
    }

    interpolateColor(value){
        let intervals = [
            { point: 0, r: 255, g: 98, b: 92 },
            { point: 0.25, r: 255, g: 244, b: 48 },
            { point: 1, r: 152, g: 244, b: 132 },
        ];

        if(this.reverse){
            value = 1 - value;
        }

        let low, high;
        for(let i = 0; i < intervals.length - 1; i++){
            if(intervals[i].point <= value && intervals[i+1].point >= value){
                low = intervals[i];
                high = intervals[i+1];
                break;
            }
        }

        if(typeof high !== 'undefined' && typeof low !== 'undefined'){
            let percent = (value - low.point ) / (high.point - low.point);

            let r = Math.round(low.r + (high.r - low.r) * percent);
            let g = Math.round(low.g + (high.g - low.g) * percent);
            let b = Math.round(low.b + (high.b - low.b) * percent);
            return "rgb(#R#, #G#, #B#)".replace('#R#', r).replace('#G#', g).replace('#B#', b);
        }

        return "";
    }

    removeTotalRow(columnValues){
        if(this.hasTotalRow){
            return _.slice(columnValues, 0, columnValues.length - 1);
        }
        // let last = _.round(_.last(columnValues)['initial'], 2);
        // let withoutLast = _.slice(_.map(columnValues, 'initial'), 0, columnValues.length - 1);
        // if(last === _.round(_.sum(withoutLast), 2)){
        //     return _.slice(columnValues, 0, columnValues.length - 1);
        // }
        return columnValues;
    }

    parseColumnValues() {
        let columnValues = {};
        this.iterateOverCells((cell, row, column) => {
            if(!columnValues[column]){
                columnValues[column] = {
                    values: []
                };
            }
            let float = cell.textContent.trim().replace(/[\$,%]/g, '');
            float = parseFloat(float);

            columnValues[column].values.push({
                initial: float || 0,
                element: cell
            });
        });

        for(let i in columnValues){
            columnValues[i].values = this.removeTotalRow(columnValues[i].values);
            let minInColumn = _.minBy(columnValues[i].values, 'initial');

            if(minInColumn){
                minInColumn = minInColumn['initial'];
                if(minInColumn < 0){
                    columnValues[i].values = _.map(columnValues[i].values, function(v){
                        v.initial += Math.abs(minInColumn);
                        return v;
                    });
                    minInColumn = 0;
                }

                minInColumn = Math.max(minInColumn, this.interval.min);

                let maxInColumn = _.maxBy(columnValues[i].values, 'initial');
                maxInColumn = maxInColumn['initial'];

                maxInColumn = Math.max(maxInColumn, this.interval.min);

                for(let j = 0; j < columnValues[i].values.length; j++){
                    columnValues[i].values[j].normalized = maxInColumn === 0 ? 0 : columnValues[i].values[j].initial / maxInColumn;
                    columnValues[i].values[j].color = this.interpolateColor(columnValues[i].values[j].normalized);
                }
            }

        }

        return columnValues;
    }

    applyColors(tableData){
        for(let i in tableData){
            let column = tableData[i];
            for(let c in column.values){
                let cell = column.values[c];
                cell.element.style.background = cell.color;
            }
        }
    }

    resetHeatMap(el, binding){
        this.iterateOverCells(function(cell, row, col){
            cell.style.background = null;
        }, true);
    }

    applyHeatmap(){
        let data = this.parseColumnValues();
        this.applyColors(data);
    }

    handle(){
        this.resetHeatMap();
        this.applyHeatmap();
    }
}


export default {
    inserted(el, binding){
        // applyHeatmap(el, binding.value);
    },
    bind(el, binding){

    },
    update(el, binding){

    },
    componentUpdated(el, binding){
        let h = new HeatmapHandler(el, binding);
        h.handle();
    },
    unbind(el, binding){}
}