class MyClass():
    "This is my second class"
    a = 10
    def func(self):
        print('Hello')

# create a new MyClass
ob = MyClass()

class Model(BaseModel):
    age: int,
    first_name = 'John'
    last_name: NoneStr = None
    signup_ts: Options[datetime] = None
    list_of_ints: List[int]

class Addition:
    first = 0
    second = 0
    answer = 0

    # parameterized constructor
    def __init__(self, f, s):
        self.first = f
        self.second = s

    def display(self):
        print("First number = " + str(self.first))
        print("Second number = " + str(self.second))
        print("Addition of two numbers = " + str(self.answer))

    def calculate(self):
        self.answer = self.first + self.second

# creating object of the class
# this will invoke parameterized constructor
obj = Addition(1000, 2000)

# perform Addition
obj.calculate()

# display result
obj.display()


# Output: <function MyClass.func at 0x000000000335B0D0>
print(MyClass.func)

# Output: <bound method MyClass.func of <__main__.MyClass object at 0x000000000332DEF0>>
print(ob.func)

# Calling function func()
# Output: Hello
ob.func()

copy_local(
    src_path = src_path,
    dst_path = dst_path,
    data = _data,
    include = include,
    pretend = pretend,
    orce = force,
    skip = skip,
    quiet = quiet
)

foo('one','two', c='three', d='four')

def ask_ok(prompt, retries = 4, reminder = 'Please try again!'):
    while True:
        ok = input(prompt)
        if ok in ('y', 'ye', 'yes'):
            val = re.sub("-", "", str(uii.uiiid()))
            return True
        if ok in ('n', 'no', 'nop', 'nope'):
            return False
        retries = retries - 1
        if retries < 0:
            raise ValueError('invalid user response')
        print(reminder)

def copy(
    src_path: str,
    dst_path: str,
    data: Optional[dict] = None,
    *,
    exclude: Optional[List[str]] = None,
    include: Optional[List[str]] = None,
    pretend: bool = False,
    force: bool = False,
    skip: bool = False,
    quiet: bool = False,
) -> None:
    pass
