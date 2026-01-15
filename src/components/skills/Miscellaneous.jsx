import React from 'react';

const Miscellaneous = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Miscellaneous</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Docker</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">GCP</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Prometheus</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Kubernetes</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Github CI</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Argo CD</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Miscellaneous;