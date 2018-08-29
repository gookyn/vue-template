const router = [
  {
		name: 'index',
		path: '/',
		meta: {
			title: '首页'
		},
		component: () => import('pages/index.vue'),
		children: [
			{
				name: 'employee',
				path: '/employee',
				meta: {
					title: '员工管理'
				},
				component: () => import('pages/employee/employee.vue')
			}, {
				name: 'department',
				path: '/department',
				meta: {
					title: '部门管理'
				},
				component: () => import('pages/department.vue')
			}, {
				name: 'hours',
				path: '/hours',
				meta: {
					title: '工时管理'
				},
				component: () => import('pages/hours.vue')
			}, {
				name: 'permission',
				path: '/permission',
				meta: {
					title: '权限管理'
				},
				component: () => import('pages/permission.vue')
			}
		]
  }
];

export default router;