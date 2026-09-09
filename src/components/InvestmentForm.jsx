import InputGroup from "./InputGroup";

export default function InvestmentForm({ labels, initialInput, onChange }) {
    

    return (
        <section id="user-input" >
            <div className="input-group">
                <InputGroup label={labels.initialInvestment} onChange={onChange} value={initialInput.initialInvestment} />
                <InputGroup label={labels.annualInvestment} onChange={onChange} value={initialInput.annualInvestment} />
            </div>
            <div className="input-group">
                <InputGroup label={labels.expectedReturn} onChange={onChange} value={initialInput.expectedReturn} />
                <InputGroup label={labels.duration} onChange={onChange} value={initialInput.duration} />
            </div>
        </section>
    )
}