// 定义节点数据
const nodes = [
   // 医书种类
   { id: '本草', type: '医书种类', name: '本草' },
   { id: '方药', type: '医书种类', name: '方药' },
   { id: '四诊', type: '医书种类', name: '四诊' },
   { id: '医经', type: '医书种类', name: '医经' },
   { id: '医论', type: '医书种类', name: '医论' },
   { id: '医案', type: '医书种类', name: '医案' },
   { id: '经络', type: '医书种类', name: '经络' },
   { id: '针灸', type: '医书种类', name: '针灸' },
   { id: '妇幼', type: '医书种类', name: '妇幼' },
   { id: '五官', type: '医书种类', name: '五官' },
   { id: '伤科', type: '医书种类', name: '伤科' },
   // 作者
   { id: '神农', type: '作者', name: '神农' },
   { id: '李时珍', type: '作者', name: '李时珍' },
   { id: '张仲景', type: '作者', name: '张仲景' },
   { id: '扁鹊', type: '作者', name: '扁鹊' },
   { id: '黄帝', type: '作者', name: '黄帝' },
   { id: '孙思邈', type: '作者', name: '孙思邈' },
   { id: '叶天士', type: '作者', name: '叶天士' },
   { id: '皇甫谧', type: '作者', name: '皇甫谧' },
   { id: '杨继洲', type: '作者', name: '杨继洲' },
   { id: '钱乙', type: '作者', name: '钱乙' },
   { id: '唐宗海', type: '作者', name: '唐宗海' },
   { id: '华佗', type: '作者', name: '华佗' },
   // 医书
   { id: '《神农本草经》', type: '医书', name: '《神农本草经》' },
   { id: '《本草纲目》', type: '医书', name: '《本草纲目》' },
   { id: '《伤寒杂病论》', type: '医书', name: '《伤寒杂病论》' },
   { id: '《难经》', type: '医书', name: '《难经》' },
   { id: '《黄帝内经》', type: '医书', name: '《黄帝内经》' },
   { id: '《千金方》', type: '医书', name: '《千金方》' },
   { id: '《临证指南医案》', type: '医书', name: '《临证指南医案》' },
   { id: '《针灸甲乙经》', type: '医书', name: '《针灸甲乙经》' },
   { id: '《针灸大成》', type: '医书', name: '《针灸大成》' },
   { id: '《小儿药证直诀》', type: '医书', name: '《小儿药证直诀》' },
   { id: '《眼科秘诀》', type: '医书', name: '《眼科秘诀》' },
   { id: '《中藏经》', type: '医书', name: '《中藏经》' }
];

// 定义边数据
const links = [
   // 作者 - 医书
   { source: '神农', target: '《神农本草经》' },
   { source: '李时珍', target: '《本草纲目》' },
   { source: '张仲景', target: '《伤寒杂病论》' },
   { source: '扁鹊', target: '《难经》' },
   { source: '黄帝', target: '《黄帝内经》' },
   { source: '孙思邈', target: '《千金方》' },
   { source: '叶天士', target: '《临证指南医案》' },
   { source: '皇甫谧', target: '《针灸甲乙经》' },
   { source: '杨继洲', target: '《针灸大成》' },
   { source: '钱乙', target: '《小儿药证直诀》' },
   { source: '唐宗海', target: '《眼科秘诀》' },
   { source: '华佗', target: '《中藏经》' },
   // 医书 - 医书种类
   { source: '《神农本草经》', target: '本草' },
   { source: '《本草纲目》', target: '本草' },
   { source: '《伤寒杂病论》', target: '方药' },
   { source: '《难经》', target: '四诊' },
   { source: '《黄帝内经》', target: '医经' },
   { source: '《千金方》', target: '医论' },
   { source: '《临证指南医案》', target: '医案' },
   { source: '《针灸甲乙经》', target: '经络' },
   { source: '《针灸大成》', target: '针灸' },
   { source: '《小儿药证直诀》', target: '妇幼' },
   { source: '《眼科秘诀》', target: '五官' },
   { source: '《中藏经》', target: '伤科' },
   // 连接医书种类（按顺序用 10 条线连接）
   { source: '本草', target: '方药' },
   { source: '方药', target: '四诊' },
   { source: '四诊', target: '医经' },
   { source: '医经', target: '医论' },
   { source: '医论', target: '医案' },
   { source: '医案', target: '经络' },
   { source: '经络', target: '针灸' },
   { source: '针灸', target: '妇幼' },
   { source: '妇幼', target: '五官' },
   { source: '五官', target: '伤科' }
];

// 创建 SVG 元素
const svg = d3.select("#graph")
  .attr("width", 1000)
  .attr("height", 600);

// 获取 SVG 的宽度和高度
const width = +svg.attr("width");
const height = +svg.attr("height");

// 创建力导向布局，将中心位置设置为 SVG 容器的中心
const simulation = d3.forceSimulation(nodes)
  .force("link", d3.forceLink(links).id(d => d.id).distance(50 * (2/3))) // 缩短连线距离为原来的三分之二
  .force("charge", d3.forceManyBody().strength(-40))
  .force("center", d3.forceCenter(width / 2, height / 2))
  .force("collide", d3.forceCollide().radius(15));

// 给医书种类节点一个横向的初始位置，使其居中
nodes.filter(node => node.type === '医书种类').forEach((node, index) => {
   const interval = 30;
   node.x = width / 2 - (nodes.filter(n => n.type === '医书种类').length * interval / 2) + index * interval;
   node.y = height / 2;
});

// 创建连线
const link = svg.append("g")
  .attr("class", "links")
  .selectAll("line")
  .data(links)
  .join("line")
  .attr("class", "link");

// 创建节点
const node = svg.append("g")
  .attr("class", "nodes")
  .selectAll("circle")
  .data(nodes)
  .join("circle")
  .attr("class", "node")
  .attr("r", 8)
  .attr("fill", function (d) {
       if (d.type === '医书种类') {
           return '#C2E085';
       } else if (d.type === '作者') {
           return '#73A6FF';
       } else if (d.type === '医书') {
           return '#FF9999';
       }
   })
  .on("mouseover", function (event, d) {
       d3.select(this)
          .transition()
          .duration(300)
          .attr("r", 12);
   })
  .on("mouseout", function (event, d) {
       d3.select(this)
          .transition()
          .duration(300)
          .attr("r", 8);
   });

// 节点添加文本标签
const labels = svg.append("g")
  .attr("class", "labels")
  .selectAll("text")
  .data(nodes)
  .join("text")
  .attr("id", d => `text-${d.id}`)
  .text(d => d.name)
  .attr("x", d => d.x)
  .attr("y", d => d.y - 15)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "middle")
  .style("visibility", "visible"); // 确保文本始终可见

// 更新节点和连线的位置
simulation.on("tick", () => {
   link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

   node
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);

   labels
      .attr("x", d => d.x)
      .attr("y", d => d.y - 15);
});

// 确保布局稳定后再渲染
simulation.on("end", () => {
   link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

   node
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);

   labels
      .attr("x", d => d.x)
      .attr("y", d => d.y - 15);
});

// 添加节点上下浮动效果
// function addFloatingEffect() {
//    node.transition()
//       .duration(1000)
//       .ease(d3.easeSinInOut)
//       .attr("cy", d => d.y + Math.random() * 10 - 5)
//       .on("end", addFloatingEffect);
// }

addFloatingEffect();
