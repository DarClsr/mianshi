// JSON2DOM = react 的 render 函数

let vnode = {
  tag: "DIV",
  attrs: {
    id: "app",
  },
  children: [
    {
      tag: "SPAN",
      children: [{ tag: "A", children: [] }],
    },
    {
      tag: "SPAN",
      children: [
        { tag: "A", children: [] },
        { tag: "A", children: [] },
      ],
    },
  ],
};

const render = (vnode) => {
  if (typeof vnode === "number") {
    vnode = String(vnode);
  }

  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }

  const dom = document.createElement(vnode.tag);

  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach((key) => {
      dom[key] = vnode.attrs[key];
    });
  }

  vnode.children.forEach((child) => {
    dom.appendChild(render(child));
  });

  return dom;
};



//   把上诉虚拟Dom转化成下方真实Dom
//   <div id="app">
//     <span>
//       <a></a>
//     </span>
//     <span>
//       <a></a>
//       <a></a>
//     </span>
//   </div>
