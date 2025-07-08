# Angular 19 Search and Data Table Application

This project is a simple Angular 19 standalone app that demonstrates:
- A reactive form-based Search Panel
- A Data Table to display filtered results
- Integration with a mock backend using JSON Server

## 🔧 Tech Stack

- Angular 19 with standalone components
- RxJS for reactive data handling
- JSON Server for mock API
- TypeScript and SCSS

---

## 📁 Project Structure

src/
├── app/
│ ├── app.component.ts # Main app entry
│ ├── search-panel.component.ts
│ ├── data-table.component.ts
│ ├── search.service.ts
│ └── main.ts # Bootstrap with provideHttpClient

yaml
Copy
Edit

---

## 🚀 Getting Started

### Prerequisites

- Node.js (>= 18)
- Angular CLI
- JSON Server

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/sandhya97/alten-test.git
cd server-search
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Run the JSON Server
Mock data is stored in db.json.

bash
Copy
Edit
npx json-server --watch db.json --port 3000
Example db.json:
json
Copy
Edit
{
  "users": [
    { "id": 1, "firstName": "Alice", "lastName": "Smith", "phone": "123456", "position": "Engineer" },
    { "id": 2, "firstName": "Bob", "lastName": "Johnson", "phone": "654321", "position": "Manager" }
  ]
}
4️⃣ Start Angular App
bash
Copy
Edit
ng serve
The app will be available at: http://localhost:4200

🔍 Features
Dynamic search using reactive forms

Data filtering via query parameters

Clean, component-based standalone architecture

Easy-to-customize structure for rapid prototyping

🧪 Testing
Basic testing setup can be extended using Karma and Jasmine.

To run tests:

bash
Copy
Edit
ng test
🛠️ Build
bash
Copy
Edit
ng build
