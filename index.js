const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];


function shallowCopy(originalObject){
  var newRobots = {}
  var key
  for (key in originalObject){
    newRobots[key] = originalObject[key]
  }
  return newRobots
}
 let sortedRobots = robots.map(
   robot => {
     if (knownDecepticons.includes(robot.name))
        { return Object.assign(shallowCopy(robot), {alliance: 'decepticon'})
      }
      else {
         return Object.assign(shallowCopy(robot), {alliance: 'autobot'})
       }
     })
 console.log(shallowCopy(robots))
 console.log(robots)


 const zebraStripes = [
   { width: 9.12, color: null },
   { width: 5.71, color: null },
   { width: 6.01, color: null },
   { width: 1.54, color: null },
   { width: 8.34, color: null },
   { width: 7.77, color: null },
   { width: 0.59, color: null },
   { width: 7.31, color: null },
 ];

 // coloredZebraStripes = zebraStripes.map(stripe => stripe.color)

 // coloredZebraStripes = zebraStripes.map(stripe => {
 //   if (stripe.indexOf() %2 == 0)
 //   {stripe.color = "black"}
 //   else
 //   {stripe.color = "white"}
 // })

// coloredZebraStripes = zebraStripes.filter( stripe => stripe.indexOf%2 == 0)
//  console.log(coloredZebraStripes)

coloredZebraStripes = zebraStripes.map((stripe, index)=>{
  stripe = Object.assign(shallowCopy(stripe))
  index%2==0 ? stripe.color = "black" : stripe.color = "white"
  return stripe
})
console.log(coloredZebraStripes)
console.log(zebraStripes)
