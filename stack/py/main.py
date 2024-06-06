
class Stack(object):
    def __init__(self, array: list):
        self.array = array

    def push(self, element) -> None:
        """add ann element on top of stack"""
        self.array.append(element)

    def pop(self) -> None:
        """remove element from top of stack"""
        self.array = self.array[:-1]

    def clear(self) -> None:
        """remove all elements from stack"""
        self.array.clear()

    def is_empty(self) -> bool:
        """check if stack is empty"""
        return len(self.array) == 0

    def size(self) -> int:
        return len(self.array)

    def peek(self) -> int:
        """catch a peek of the first element on the stack"""
        return self.array[-1]

    def __repr__(self):
        """stack object representation"""
        return f'{self.array}'


def main():
    stack = Stack([1, 2, 3, 4, 5])
    stack.push(3)  # expect [1, 2, 3, 4, 5, 3]
    print(stack)
    stack.pop()  # expect [1, 2, 3, 4, 5]
    print(stack)
    stack.clear()
    print(stack)  # []


if __name__ == "__main__":
    main()
