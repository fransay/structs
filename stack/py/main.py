
class Stack(object):
    def __init__(self, array):
        self.array = array

    def push(self, element):
        """add ann element on top of stack"""
        self.array.append(element)

    def pop(self):
        """remove element from top of stack"""
        self.array = self.array[:-1]

    def clear(self):
        """remove all elements from stack"""
        self.array.clear()

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
