#include <stdio.h>
#include <stdlib.h>

int capacity = 5;
int length = 0;
int* numbers;

void push(int value)
{
    if (length == capacity) {
        capacity = capacity * 2;
        int* numbers_new = malloc((capacity) * sizeof(int));
        for (int i = 0; i < length; i++) {
            numbers_new[i] = numbers[i];
        }
        free(numbers);
        numbers = numbers_new;
    }
    numbers[length++] = value;
}

void shift()
{
    for (int i = 1; i <= length; i++) {
        numbers[i - 1] = numbers[i];  
    }
    length--;
}

void pop()
{
    length = length - 1;
}

int main()
{
    numbers = malloc((capacity) * sizeof(int));
    push(1);
    push(2);
    push(3);
    push(4);
    push(5);
    push(6);

    for (int i = 0; i < length; i++) {
        printf("%i\n", numbers[i]);
    }

    printf("---------------\n");
    shift();

     for (int i = 0; i < length; i++) {
        printf("%i\n", numbers[i]);
    }

    pop();
    pop();

       for (int i = 0; i < length; i++) {
        printf("%i\n", numbers[i]);
    }

    free(numbers);
}