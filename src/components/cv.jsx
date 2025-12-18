function Cv({profile, education, experiences}) {
    return (
        <>
            <div className="cv">
                <div className="top">
                    <h1 className="top-name">{profile.fullName}</h1>
                    <h4 className="generalInfo">{profile.email} • {profile.phone} • {profile.location}</h4>

                </div>
                
                <div className="education-section"> 
                    <p className="education-header">Education</p>
                    <hr className="heading-divider"/>

                    <div className="education-body">
                        <div className="education-left">
                            <p>{education.school}</p>
                            <p>{education.major}</p>
                             <p>Relevant Course Work: {education.courseWork}</p>
                        </div>

                        <div className="education-right">
                            <p>{education.gradDate}</p>
                            <p>{education.gpa}</p>

                        </div>
                    </div>
                </div>

                <div className="experiences-section">
                    <p className="experiences-header">Experiences</p>
                    <hr className="heading-divider"/>

                    <div className="experiences-body">
                        { (experiences && experiences.length) ? (
                          experiences.map((exp) => (
                            <div key={exp.id || `${exp.company}-${exp.startDate}`} className="experience-item">
                              <div className="experiences-left">
                                <p className="exp-company">{exp.company}</p>
                                <p className="exp-role">{exp.role}</p>
                                <p className="exp-desc">{exp.description}</p>
                              </div>
                              <div className="experiences-right">
                                <p className="exp-dates">{exp.startDate} {exp.endDate ? `— ${exp.endDate}` : ''}</p>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="no-experiences">No experiences added</p>
                        )}
                    </div>
                </div>
                
            </div>
        
        </>
        
    )
}

export default Cv;