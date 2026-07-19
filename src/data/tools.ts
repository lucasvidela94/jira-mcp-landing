export interface Tool {
  name: string;
  desc: string;
}

export const tools: Tool[] = [
  { name: 'jira_search', desc: 'Search issues using JQL' },
  { name: 'jira_get_issue', desc: 'Get issue by key' },
  { name: 'jira_create_issue', desc: 'Create new issues' },
  { name: 'jira_update_issue', desc: 'Update existing issues' },
  { name: 'jira_transition_issue', desc: 'Transition through workflows' },
  { name: 'jira_assign_issue', desc: 'Assign to users' },
  { name: 'jira_delete_issue', desc: 'Delete issues' },
  { name: 'jira_list_projects', desc: 'List accessible projects' },
  { name: 'jira_get_transitions', desc: 'List available transitions' },
  { name: 'jira_add_comment', desc: 'Add comments' },
  { name: 'jira_add_worklog', desc: 'Log work' },
  { name: 'jira_list_boards', desc: 'List Agile boards' },
  { name: 'jira_list_sprints', desc: 'List sprints' },
  { name: 'jira_get_sprint', desc: 'Get sprint by ID' },
  { name: 'jira_get_active_sprint', desc: 'Get active sprint' },
  { name: 'jira_search_sprint_by_name', desc: 'Search sprints' },
  { name: 'jira_get_issue_history', desc: 'Get changelog' },
  { name: 'jira_list_project_versions', desc: 'List versions' },
  { name: 'jira_get_version', desc: 'Get version by ID' },
  { name: 'jira_get_development_info', desc: 'Linked PRs & commits' },
  { name: 'jira_list_statuses', desc: 'List project statuses' },
  { name: 'jira_create_issue_link', desc: 'Link two issues' },
  { name: 'jira_get_related_issues', desc: 'Get linked issues' },
  { name: 'jira_create_child_issue', desc: 'Create sub-tasks' },
];
