export const admin = [
    {
      name: 'Admin',
      email: 'admin@company.com',
      password: '123',
      role: 'admin',
    }
  ];
  
export const employees = [
    {
      firstName: 'Iori',
      email: 'iori@gmail.com',
      password: '123',
      tasksOverview: {
        activeTasks: 1,
        completedTasks: 1,
        failedTasks: 0,
        newTasks: 0,
      },
      tasks: [
        {
          id: 1,
          title: 'Design Task UI',
          description: 'Design the task UI for the system.',
          status: 'Active',
          dueDate: '2025-03-02',
          category: 'UI Design',
        },
        {
          id: 2,
          title: 'Bug Fix in Task Cards',
          description: 'Fix bugs related to the layout of task cards.',
          status: 'Completed',
          dueDate: '2025-02-25',
          category: 'Bug Fixes',
        },
      ],
    },
    {
      firstName: 'Diego',
      email: 'diego@gmail.com',
      password: '123',
      tasksOverview: {
        activeTasks: 1,
        completedTasks: 2,
        failedTasks: 0,
        newTasks: 1,
      },
      tasks: [
        {
          id: 3,
          title: 'Integrate Task API',
          description: 'Integrate the API for task management system.',
          status: 'Active',
          dueDate: '2025-03-03',
          category: 'API Integration',
        },
        {
          id: 4,
          title: 'Implement Search Feature',
          description: 'Implement search functionality for tasks.',
          status: 'Completed',
          dueDate: '2025-03-05',
          category: 'Feature Development',
        },
        {
          id: 5,
          title: 'Test Task Management API',
          description: 'Write tests for task management API endpoints.',
          status: 'Completed',
          dueDate: '2025-02-26',
          category: 'Testing',
        },
        {
          id: 6,
          title: 'Write Unit Tests for Search Feature',
          description: 'Write tests for the search functionality.',
          status: 'New',
          dueDate: '2025-03-07',
          category: 'Testing',
        },
      ],
    },
    {
      firstName: 'Akuma',
      email: 'akuma@gmail.com',
      password: '123',
      tasksOverview: {
        activeTasks: 1,
        completedTasks: 2,
        failedTasks: 0,
        newTasks: 0,
      },
      tasks: [
        {
          id: 7,
          title: 'Fix Mobile View for Task Cards',
          description: 'Fix issues with task card layout on mobile devices.',
          status: 'Completed',
          dueDate: '2025-02-28',
          category: 'Bug Fixes',
        },
        {
          id: 8,
          title: 'Complete Documentation for API',
          description: 'Document the task management system API.',
          status: 'Completed',
          dueDate: '2025-02-27',
          category: 'Documentation',
        },
        {
          id: 9,
          title: 'Design Task Modal',
          description: 'Design a modal for viewing detailed task information.',
          status: 'Active',
          dueDate: '2025-03-04',
          category: 'UI Design',
        },
      ],
    },
    {
      firstName: 'Rolex',
      email: 'rolex@gmail.com',
      password: '123',
      tasksOverview: {
        activeTasks: 1,
        completedTasks: 1,
        failedTasks: 1,
        newTasks: 0,
      },
      tasks: [
        {
          id: 10,
          title: 'Implement Task Editing',
          description: 'Allow users to edit existing tasks.',
          status: 'Active',
          dueDate: '2025-03-06',
          category: 'Feature Development',
        },
        {
          id: 11,
          title: 'Test Task Feature on Mobile',
          description: 'Test task management features on mobile devices.',
          status: 'Completed',
          dueDate: '2025-02-28',
          category: 'Testing',
        },
        {
          id: 12,
          title: 'Fix UI Bugs in Task Modal',
          description: 'Fix bugs in task modal UI design.',
          status: 'Failed',
          dueDate: '2025-03-01',
          category: 'Bug Fixes',
        },
      ],
    },
    {
      firstName: 'Kyo',
      email: 'kyo@gmail.com',
      password: '123',
      tasksOverview: {
        activeTasks: 1,
        completedTasks: 2,
        failedTasks: 0,
        newTasks: 1,
      },
      tasks: [
        {
          id: 13,
          title: 'Create Task Dashboard',
          description: 'Create a dashboard for displaying tasks to users.',
          status: 'Completed',
          dueDate: '2025-02-20',
          category: 'UI/UX',
        },
        {
          id: 14,
          title: 'Write Unit Tests for Task Cards',
          description: 'Write unit tests for task cards component.',
          status: 'Completed',
          dueDate: '2025-02-22',
          category: 'Testing',
        },
        {
          id: 15,
          title: 'Improve Task Card UI',
          description: 'Improve UI layout of the task cards.',
          status: 'Active',
          dueDate: '2025-03-07',
          category: 'UI Design',
        },
        {
          id: 16,
          title: 'Implement Task Sorting Feature',
          description: 'Implement sorting functionality for tasks.',
          status: 'New',
          dueDate: '2025-03-10',
          category: 'Feature Development',
        },
      ],
    },
  ];
  
  
let dta = {
  role : null,
  email:null
}

  let setLocalStorage = () => {
    localStorage.setItem('admin', JSON.stringify(admin));
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('login', JSON.stringify(dta))
  }

  let getLocalStorage = () => {
    const adminData = JSON.parse(localStorage.getItem('admin'));
    const employeeData = JSON.parse(localStorage.getItem('employees'));
    const dta = JSON.parse(localStorage.getItem('dta'));
    return { admin: adminData, employees: employeeData , dta:dta };
  }
  


  export { setLocalStorage , getLocalStorage };
  