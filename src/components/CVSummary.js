import React from 'react'

class CVSummary extends React.Component {
  onEditBtnClick = () => {
    this.props.onEditBtnClick()
  }

  render() {
    const {
      name,
      email,
      phoneNumber,
      instituteName,
      major,
      studyPeriod,
      companyName,
      positionTitle,
      jobTasks,
      companyJoiningDate,
      companyLeavingDate,
    } = this.props.applicantInfo
    return (
      <div className="summary">
        <table>
          <tbody>
            <tr className="categoryRow">
              <td colSpan="2">personal info</td>
            </tr>
            <tr>
              <th>name</th>
              <td>{name}</td>
            </tr>
            <tr>
              <th>email</th>
              <td>{email}</td>
            </tr>
            <tr>
              <th>phone number</th>
              <td>{phoneNumber}</td>
            </tr>

            <tr className="categoryRow">
              <td colSpan="2">educational experience</td>
            </tr>
            <tr>
              <th>institute</th>
              <td>{instituteName}</td>
            </tr>
            <tr>
              <th>major</th>
              <td>{major}</td>
            </tr>
            <tr>
              <th>study period (in years)</th>
              <td>{studyPeriod}</td>
            </tr>

            <tr className="categoryRow">
              <td colSpan="2">practical experience</td>
            </tr>
            <tr>
              <th>company name</th>
              <td>{companyName}</td>
            </tr>
            <tr>
              <th>position title</th>
              <td>{positionTitle}</td>
            </tr>
            <tr>
              <th>company joining date</th>
              <td>{companyJoiningDate}</td>
            </tr>
            <tr>
              <th>company leaving date</th>
              <td>{companyLeavingDate}</td>
            </tr>
            <tr>
              <th>main job tasks</th>
              <td>
                <div>{jobTasks}</div>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="button" className="btn--edit" onClick={this.onEditBtnClick}>
          edit
        </button>
      </div>
    )
  }
}

export default CVSummary
