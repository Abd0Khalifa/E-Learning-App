import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function WhatYouLearn({skill1,skill2,skill3,skill4}) {
    return (
        <div className="glass-card p-8 mb-8 animate-on-scroll">
            <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="feature-item flex items-center">
                    
                    <span> <FontAwesomeIcon icon={faCheck} className="text-main-color mr-3" />{skill1}</span>
                </div>
                <div className="feature-item flex items-center">
                    
                    <span> <FontAwesomeIcon icon={faCheck} className="text-main-color mr-3" />{skill2}</span>
                </div>
                <div className="feature-item flex items-center">
                    <span><FontAwesomeIcon icon={faCheck} className="text-main-color mr-3" />{skill3}</span>
                </div>
                <div className="feature-item flex items-center">
                    
                    <span><FontAwesomeIcon icon={faCheck} className="text-main-color mr-3" />{skill4}</span>
                </div>
            </div>
        </div>
    );
}

export default WhatYouLearn;
