const taskInput = document.querySelector("#task-input");
const taskForm = document.querySelector("#task-form");
const allTasks = document.querySelector(".tasks");
const countPending = document.querySelector(".count-pending");
const countComplete = document.querySelector(".count-complete");

function updateCounts() {
    const boxes = allTasks.querySelectorAll(".taskCheckBox");
    const completed = allTasks.querySelectorAll(".taskCheckBox:checked").length;

    countComplete.textContent = completed;
    countPending.textContent = boxes.length - completed;
}

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = taskInput.value.trim();
    if (!text) return;

    const id = `task-${crypto.randomUUID()}`;

    allTasks.insertAdjacentHTML("beforeend", `
        <div class="flex justify-between items-center p-4 border border-neutral-600 rounded-xl" id="${id}">
            <div class="flex justify-center items-center gap-4">
                <div>
                    <input type="checkbox" class="size-4 accent-black taskCheckBox" data-target="${id}">
                </div>
                <div>
                    <h2 class="text-lg font-semibold"></h2>
                    <p class="text-[#5C685F] text-xs">High Priority</p>
                </div>
            </div>
            <div>
                <img src="assets/icons/trash.png" alt="Delete" class="taskDel cursor-pointer" data-target="${id}">
            </div>
        </div>
    `);

    // textContent keeps user input from being parsed as HTML
    document.querySelector(`#${id} h2`).textContent = text;

    taskForm.reset();
    updateCounts();
});

allTasks.addEventListener("change", (e) => {
    if (!e.target.classList.contains("taskCheckBox")) return;

    document.getElementById(e.target.dataset.target)
        ?.classList.toggle("active", e.target.checked);

    updateCounts();
});

allTasks.addEventListener("click", (e) => {
    const delBtn = e.target.closest(".taskDel");
    if (!delBtn) return;

    document.getElementById(delBtn.dataset.target)?.remove();
    updateCounts();
});

updateCounts();