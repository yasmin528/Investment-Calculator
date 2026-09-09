
export default function InputGroup({label , onChange, value}) {

    return (
        <p >
            <label>{label}</label>
            <input required type="number"  value={value} onChange={(e) => onChange(label, e.target.value)} />
        </p>
    )
}