import { elements } from "./base";

export const inputDescription = () => elements.searchDescription.value;
export const inputLocation = () => elements.searchLocation.value;

export const clearInput = () => {
  elements.searchDescription.value = '';
  elements.searchLocation.value = '';
};

export const clearContent = () => {
  elements.siteContent.innerHTML = '';
};

export const renderJobs = result => {

  result.forEach(data => {
    const markup = `<div class="container my-4 md:mx-auto flex justify-center shadow-lg border-l-0 md:border-l-8 border-t-8 md:border-t-0 border-teal-500 rounded bg-white p-4 max-w-screen-md">
        <div class="md:flex  flex-col justify-between lg:justify-between sm:flex-row md:flex-row">
          <div class="md:flex items-center justify-center text-center md:text-left">
            <div class="md:flex-shrink-0 flex justify-center">
              <img class="rounded-lg md:w-32" src="${data.company_logo}" alt="${data.company}">
            </div>
            <div class="mt-4 md:mt-0 ml-0 md:ml-4">
              <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">${data.company}</div>
              <p class="block mt-1 text-lg leading-tight font-semibold text-gray-900">${data.title}</a>
              <p class="mt-2 text-gray-600 text-sm">${data.created_at} . ${data.type} . ${data.location}</p>
            </div>
          </div>
          <div class="flex flex-row justify-evenly md:flex-col ml-0 mt-4 md:mt-0 sm:ml-2 md:ml-20">
            <a href="${data.url}" id="apply-job" class="px-4 py-2 bg-teal-500 hover:bg-teal-600 shadow border-b-4 border-teal-800 rounded uppercase font-bold text-white text-sm mb-0 md:mb-4">Apply</a>
            <a href="${data.url}" class="px-4 py-2 bg-gray-700 hover:bg-gray-900 shadow border-b-4 border-gray-500 rounded uppercase font-bold text-white text-sm">Detail</a>
          </div>
        </div>
      </div>
    `;
    elements.siteContent.insertAdjacentHTML('beforeend', markup);
  });
};

const timeFormat = time => {

};
