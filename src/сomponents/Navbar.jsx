// import {FiMenu,FiX} from 'react-icons/fi'

// // const Links=[
// //     {url:'/home',t:'Home'}
// // ]
// export default function Navbar({links}){
//     return(
//         <nav className='Navbar
//         sticky top-0 h-16 
//         bg-black opacity-75
//         flex justify-between 
//         items-center
//         px-7 py-0 -mb-20
//         z-10'>
//             <span className='Nav__logo text-white text-4xl font-["MonteCarlo,cursive"]'>Полезный мёд</span>
//             <ul className='Nav__list flex list-none'>
//                 {links.map(i=>{
//                     return(
//                         <li className='Nav__i whitespace-nowrap' key={i.title}>
//                             <a href={i.url} className='Nav__l 
//                             text-sm no-underline 
//                             text-white text-center p-2.5 
//                             my-0 mx-1.5 border-solid
//                             border-t-0 border-r-0 border-b-2 border-l-0
//                             border-transparent duration-[2500ms]
//                             hover:border-white hover:duration-[2500ms]'>
//                                 {i.title}
//                             </a>
//                         </li>
//                     )
//                 })}
//                 </ul> 
//         </nav>
//     )
// }