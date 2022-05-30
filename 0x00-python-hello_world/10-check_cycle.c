#include "lists.h"
/**
 *check_cycle - function for checking cycles in singly linked list
 *@list:lists as parameter to be checked
 *Return:integer
 *
 */

int check_cycle(listint_t *list)
{
	listint_t *head;
	listint_t *fast;

	if (list == NULL)
		return (0);
	head = list;
	fast = list;
	while (head && fast && fast->next)
	{
		head = head->next;
		fast = fast->next->next;
		if (head == fast)
		{
			return (1);
		}
	}
	return (0);

}
