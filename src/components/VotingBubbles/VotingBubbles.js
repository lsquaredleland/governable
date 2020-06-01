import React, { useContext, useState, useEffect, useRef } from 'react'

import { AppContext } from '../../App'
// import { group, rollup } from 'd3-array';
import * as d3 from 'd3';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

// https://observablehq.com/@d3/clustered-bubbles
const VotingBubbles = () => {
  const { voters } = useContext(AppContext)

  return (
    <>
      <div style={{height:"450px"}}>
        {/*chart()*/}
        <svg style={{width:"100%", height:"100%"}}>
          <circle
            cx="150"
            cy={450/2}
            r="40"
          />
        </svg>
      </div>
    </>
  )
}

export default VotingBubbles

// const m = 3;
// const n = 50;
// const width = 600
// const height = 450
// const color = d3.scaleOrdinal(d3.range(m), d3.schemeCategory10);
// const ref = useRef()
//
// const data = ({
//   children: Array.from(
//     d3.group(
//       Array.from({length: n}, (_, i) => ({
//         group: Math.random() * m | 0,
//         value: -Math.log(Math.random())
//       })),
//       d => d.group
//     ),
//     ([, children]) => ({children})
//   )
// })
//
// const drag = simulation => {
//
//   function dragstarted(d) {
//     if (!d3.event.active) simulation.alphaTarget(0.3).restart();
//     d.fx = d.x;
//     d.fy = d.y;
//   }
//
//   function dragged(d) {
//     d.fx = d3.event.x;
//     d.fy = d3.event.y;
//   }
//
//   function dragended(d) {
//     if (!d3.event.active) simulation.alphaTarget(0);
//     d.fx = null;
//     d.fy = null;
//   }
//
//   return d3.drag()
//       .on("start", dragstarted)
//       .on("drag", dragged)
//       .on("end", dragended);
// }
//
// const centroid = (nodes) => {
//   let x = 0;
//   let y = 0;
//   let z = 0;
//   for (const d of nodes) {
//     let k = d.r ** 2;
//     x += d.x * k;
//     y += d.y * k;
//     z += k;
//   }
//   return {x: x / z, y: y / z};
// }
//
// const pack = () => d3.pack()
//     .size([width, height])
//     .padding(1)
//   (d3.hierarchy(data)
//     .sum(d => d.value))
//
// const forceCollide = () => {
//   const alpha = 0.4; // fixed for greater rigidity!
//   const padding1 = 2; // separation between same-color nodes
//   const padding2 = 6; // separation between different-color nodes
//   let nodes;
//   let maxRadius;
//
//   function force() {
//     const quadtree = d3.quadtree(nodes, d => d.x, d => d.y);
//     for (const d of nodes) {
//       const r = d.r + maxRadius;
//       const nx1 = d.x - r, ny1 = d.y - r;
//       const nx2 = d.x + r, ny2 = d.y + r;
//       quadtree.visit((q, x1, y1, x2, y2) => {
//         if (!q.length) do {
//           if (q.data !== d) {
//             const r = d.r + q.data.r + (d.data.group === q.data.data.group ? padding1 : padding2);
//             let x = d.x - q.data.x, y = d.y - q.data.y, l = Math.hypot(x, y);
//             if (l < r) {
//               l = (l - r) / l * alpha;
//               d.x -= x *= l, d.y -= y *= l;
//               q.data.x += x, q.data.y += y;
//             }
//           }
//         } while (q = q.next);
//         return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
//       });
//     }
//   }
//
//   force.initialize = _ => maxRadius = d3.max(nodes = _, d => d.r) + Math.max(padding1, padding2);
//
//   return force;
// }
//
// const forceCluster = () => {
//   const strength = 0.2;
//   let nodes;
//
//   function force(alpha) {
//     const centroids = rollup(nodes, centroid, d => d.data.group);
//     const l = alpha * strength;
//     for (const d of nodes) {
//       const {x: cx, y: cy} = centroids.get(d.data.group);
//       d.vx -= (d.x - cx) * l;
//       d.vy -= (d.y - cy) * l;
//     }
//   }
//
//   force.initialize = _ => nodes = _;
//
//   return force;
// }
//
// const chart = () => {
//
//   const nodes = pack().leaves();
//
//   const simulation = d3.forceSimulation(nodes)
//       .force("x", d3.forceX(width / 2).strength(0.01))
//       .force("y", d3.forceY(height / 2).strength(0.01))
//       .force("cluster", forceCluster())
//       .force("collide", forceCollide());
//
//   const svg = d3.select(ref.current);
//
//   const node = svg.append("g")
//     .selectAll("circle")
//     .data(nodes)
//     .join("circle")
//       .attr("cx", d => d.x)
//       .attr("cy", d => d.y)
//       .attr("fill", d => color(d.data.group))
//       .call(drag(simulation));
//
//   node.transition()
//       .delay((d, i) => Math.random() * 500)
//       .duration(750)
//       .attrTween("r", d => {
//         const i = d3.interpolate(0, d.r);
//         return t => d.r = i(t);
//       });
//
//   simulation.on("tick", () => {
//     node
//         .attr("cx", d => d.x)
//         .attr("cy", d => d.y);
//   });
//
//   invalidation.then(() => simulation.stop());
//
//   return svg.node();
// }
