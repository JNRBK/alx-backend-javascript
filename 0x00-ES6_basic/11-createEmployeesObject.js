export default function createEmployeesObject(departmentName, employees) {
  const NewObj = {
    [departmentName]: employees,
  };
  return NewObj;
}
