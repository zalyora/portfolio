export function Avatar(props) {
    return (
        <img src={ props.Image } alt="avatar" />
    )
}

// export function Avatar(props) {
//     return (
//         <picture className="avatar">
//             <source media="(min-width:370px)" srcSet={ props.avatar370 }  />
//             <source media="(min-width:360px)" srcSet={ props.avatar360 } />
//             <img src={ props.avatar } alt="avatar" />
//         </picture>
//     )
// }