System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TodoService;
    return {
        setters:[],
        execute: function() {
            class TodoService {
                getTodos() {
                    return [
                        {
                            title: "Item 1",
                            completed: true },
                        {
                            title: "Item 2",
                            completed: false
                        },
                        {
                            title: "Item 3",
                            completed: false
                        }
                    ];
                }
            }
            exports_1("TodoService", TodoService);
        }
    }
});
//# sourceMappingURL=todo.service.js.map