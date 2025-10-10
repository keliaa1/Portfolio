import { OrbitingCircles } from "./OrbittingCircles"

export function Frameworks() {
    const Skills = [
        "blender",
        "flutter",
        "github",
        "java",
        "linux",
        "nextjs",
        "php",
        "sql",
        "tailwind",
        "typescript",
        "wireshark",

    ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {Skills.map((skill, index)=>(
            <img key={index} src={`/framework/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {Skills.reverse().map((skill, index)=>(
            <img key={index} src={`/framework/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      
    </div>
  )
}
const Icons = {
 
  
}
