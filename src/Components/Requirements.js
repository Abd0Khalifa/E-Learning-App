import RequirementItem from './RequirementItem';

function Requirements() {
    return (
        <div className="glass-card p-8 animate-on-scroll">
            <h2 className="text-2xl font-bold mb-6">Requirements</h2>
            <ul className="space-y-4 text-gray-400">
                <RequirementItem text="Basic understanding of computer operations" />
                <RequirementItem text="A computer with internet connection" />
                <RequirementItem text="Eagerness to learn and practice" />
            </ul>
        </div>
    );
}

export default Requirements;
