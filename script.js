const taskInput = document.querySelector("#task-input");
const taskForm = document.querySelector("#task-form");
const submitBtn = document.querySelector("#submit-btn");
const allTasks = document.querySelector(".tasks");

taskForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let task = taskInput.value;

    allTasks.innerHTML += `

      <div class="flex justify-between items-center p-4 border border-neutral-600 rounded-xl" id="${task}">
                    <div class="flex justify-center items-center gap-4">

                        <div>
                            <input type="checkbox" id="" class="size-4 accent-black taskCheckBox" data-target="${task}">
                        </div>

                        <div>
                            <h2 class="text-lg font-semibold">${task}</h2>
                            <p class="text-[#5C685F] text-xs">High Priority</p>
                        </div>

                    </div>

                    <div>
                        <img src="assets/icons/trash.png" alt="" class="buz cursor-pointer" data-target="${task}" id="taskDel">
                    </div>
                </div>

`
    taskForm.reset();

})

allTasks.addEventListener("change", (e) => {
    if (!e.target.classList.contains("taskCheckBox")) return;

    const target = document.getElementById(e.target.dataset.target);
    target?.classList.toggle("active", e.target.checked);
});