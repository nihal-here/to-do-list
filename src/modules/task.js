export default class Task {
  constructor(name, dueDate = "No Date") {
    this.name = name;
    this.dueDate = dueDate;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setDate(dueDate) {
    this.dueDate = dueDate;
  }

  getDate() {
    return this.dueDate;
  }

  getDateFormatted() {
    const parts = this.dueDate.split("/");
    if (parts.length === 3) {
      const [month, day, year] = parts;
      const formattedDate = new Date(
        `${month}/${day}/${year}`
      ).toLocaleDateString();
      return formattedDate;
    } else {
      return "invalid Date";
    }
  }
}
