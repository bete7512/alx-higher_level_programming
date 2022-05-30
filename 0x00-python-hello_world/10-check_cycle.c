#include "lists.h"
/**
 *
 *
 *
 *
 */

int check_cycle(listint_t *list)
{
	listint_t *head;
	if(list == NULL)
		return (0);
	head = list;
	while(list != NULL)
	{
		if(list->next == head)
		{
			return (1);
		}
		list = list->next;
	}
	return (0);

}
