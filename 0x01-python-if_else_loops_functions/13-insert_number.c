#include "lists.h"
/**
 *
 *
 *
 */

listint_t *insert_node(listint_t **head, int number)
{
	if (head == NULL || *head == NULL)
		return NULL;

	listint_t *temp;
	listint_t *header = *head;
	temp = malloc(sizeof(listint_t));
	if (temp == NULL)
		return NULL;
	temp->n = number;
	temp->next = NULL;

	while (header)
	{
		if(temp->n >= header->n && temp->n<(header->next)->n)
		{
			temp->next = header->next;
			header->next = temp;
			break;
		}
		header = header->next;
	}
	return header;
}
