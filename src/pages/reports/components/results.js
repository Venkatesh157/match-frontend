import React from "react";
import ProjectTable from "../components/project-table";
import NoReports from "../../../components/no-reports";

function Results({ reports, projects, gateways, values }) {
  const groupBy = (array, key) => {
    return (
      array &&
      array.reduce((result, currentValue) => {
        (result[currentValue[key]] = result[currentValue[key]] || []).push(
          currentValue
        );
        return result;
      }, {})
    );
  };

  const groupedReport = groupBy(reports, "projectId");

  const groupedGateway = groupBy(reports, "gatewayId");

  return (
    <>
      {(reports === undefined || reports.length === 0) && <NoReports />}
      {reports && reports.length > 0 && (
        <>
          <div>
            <ProjectTable
              details={groupedReport}
              projects={projects}
              gateways={gateways}
              values={values}
              groupedGateway={groupedGateway}
            />
          </div>
        </>
      )}
    </>
  );
}

export default Results;
