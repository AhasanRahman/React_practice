// import React from "react";

const todos = [

    {
        title: "Todo1",
        des: "todo1 description"
    },
    {
        title: "Todo2",
        des: "todo2 description"
    },
    {
        title: "Todo3",
        des: "todo3 description"
    }
];

const List = () => {

    return (
        <div>
            {todos.map((todo) => {
                return (
                    <div className="todo-div" style={{ width: '500px', padding: '10px' , margin: '10px auto', backgroundColor: 'gray' }}>
                        <h3 style={{ fontSize: "30px" }}>{todo.title}</h3>
                        <p style={{ fontSize: "18px" }}>{todo.des}</p>
                    </div>
                );

            })}
        </div>
    );
};

export default List;