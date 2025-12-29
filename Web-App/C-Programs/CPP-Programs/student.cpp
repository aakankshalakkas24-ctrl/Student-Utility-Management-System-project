CPP-Programs/student.cpp
  #include <iostream>
using namespace std;

class Student {
public:
    int roll;
    int attendance;
    float marks;

    void input() {
        cout << "Enter Roll Number: ";
        cin >> roll;
        cout << "Enter Attendance (%): ";
        cin >> attendance;
        cout << "Enter Marks: ";
        cin >> marks;
    }

    void display() {
        cout << "\n--- Student Report ---\n";
        cout << "Roll Number: " << roll << endl;
        cout << "Attendance: " << attendance << "%" << endl;
        cout << "Marks: " << marks << endl;
    }
};

int main() {
    Student s;
    s.input();
    s.display();
    return 0;
}
