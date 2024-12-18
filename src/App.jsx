export default function App() {
  return (

<form>
<h1 className=".inter-font mt-40 ml-80 text-5xl">
      Register
    </h1>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <input type="text" id="email" className="ml-80 mt-16 bg-white-50 border border-black text-black-900 text-sm block w-72 p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
        </div>
    </div>  
    <select id="countries" className="ml-80 mt-6 bg-white-50 border border-black text-black-900 text-sm block w-72 p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Country</option>
    <option value="DI">Dropdown item</option>
    <option value="DI">Dropdown item</option>
    <option value="DI">Dropdown item</option>
    <option value="DI">Dropdown item</option>
  </select>
    <div class="flex items-start mb-6 mt-6">
        <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="ml-80 w-4 h-4 border border-gray-100 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
        </div>
        <label for="remember" className="ms-2 text-sm font-medium text-black-600 dark:text-black-100">Checkbox</label>
    </div>
    <div class="flex items-start mb-2 mt-6">
        <div class="flex items-center h-5">
        <input id="remember" type="radio" value="" className="ml-80 w-4 h-4 border border-black-100 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
        </div>
        <label for="remember" className="ms-2 text-sm font-medium text-black-600 dark:text-black-100">Option 1</label>
    </div>
    <div class="flex items-start mb-6 mt-2">
        <div class="flex items-center h-5">
        <input id="remember" type="radio" value="" className="ml-80 w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring--300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
        </div>
        <label for="remember" className="ms-2 text-sm font-medium text-black-900 dark:text-black-300">Option 2</label>
    </div>
    <button type="submit" className="ml-80 text-white block bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-72  px-5 py-2.5 text-center ">Continue</button>
</form>

  )
}