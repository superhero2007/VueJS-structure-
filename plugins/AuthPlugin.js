import store from './../store';

const AuthPlugin = {
    install(Vue, options){

        Vue.hasPermission = function (permission) {
            let data = [];
            if (typeof permission == "string") {
                data = [permission];
            }
            else {
                data = permission;
            }

            for(let idx in data) {
                if (store.state.userPermissions.hasOwnProperty(String(data[idx]))) {
                    return true;
                }
            }
            return false;
        };

        Vue.hasRole = (roles) => {
            let data = [];
            if (typeof roles == "string") {
                data = [roles];
            }
            else {
                data = roles;
            }
            let currentRoles = store.state.userInfo.roles.map((item) => {
                return item.toLowerCase();
            });

            for (let i in data) {
                if (currentRoles.indexOf(data[i].toLowerCase()) >= 0) {
                    return true;
                }
            }
            return false;
        };

        Vue.isSuperAdmin = () => {
            return Vue.hasRole(['Super Admin']);
        };

        Vue.mixin({
            methods: {
                hasPermission: (permission) => {
                    return Vue.hasPermission(permission)
                },
                hasRole: Vue.hasRole,
                isSuperAdmin: Vue.isSuperAdmin
            }
        });
    }
};

export default AuthPlugin;