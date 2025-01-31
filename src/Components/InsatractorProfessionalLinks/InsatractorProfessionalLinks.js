import React from "react";

const InsatractorProfessionalLinks = () => {
    return (
        <div className="glass-card p-6">
            <h3 className="text-xl font-bold mb-6">Professional Links</h3>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-2">Personal Website</label>
                    <input
                        type="url"
                        className="modern-input"
                        value="https://janesmith.dev"
                        readOnly
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">LinkedIn</label>
                    <input
                        type="url"
                        className="modern-input"
                        value="https://linkedin.com/in/janesmith"
                        readOnly
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">GitHub</label>
                    <input
                        type="url"
                        className="modern-input"
                        value="https://github.com/janesmith"
                        readOnly
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Twitter</label>
                    <input
                        type="url"
                        className="modern-input"
                        value="https://twitter.com/janesmith"
                        readOnly
                    />
                </div>
            </div>
        </div>
    );
};

export default InsatractorProfessionalLinks;
