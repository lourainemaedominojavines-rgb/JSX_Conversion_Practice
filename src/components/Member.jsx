export default function Member ({name, role}) {
    return (
        <div className = "border p-4">
            <h2>{name}</h2>
            <p>{role}</p>
        </div>
    ); 
}