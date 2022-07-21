


export default function ThemedName({theme}){
    const {background, foreground} = theme;
    return <button style={{
        backgroundColor:background,
        color:foreground
    }}>
        click
    </button>

}