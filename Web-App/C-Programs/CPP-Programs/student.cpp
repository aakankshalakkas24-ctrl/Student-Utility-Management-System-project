CPP-Programs/student.cpp
 #include <iostream>
#include <string>
using namespace std;

class Student {
private:
    string name;
    int roll;
    int attendance;
    float marks;

public:
    void input() {
        cout << "Enter Student Name: ";
        getline(cin >> ws, name); // Handles full names
        cout << "Enter Roll Number: ";
        cin >> roll;
        cout << "Enter Attendance (%): ";
        cin >> attendance;
        cout << "Enter Marks (0-100): ";
        cin >> marks;
    }

    string calculateGrade() {
        if (marks >= 80) return "A+ (Excellent)";
        if (marks >= 60) return "B (Good)";
        if (marks >= 40) return "C (Pass)";
        return "F (Fail)";
    }

    void displayAnalysis() {
        cout << "\n================================" << endl;
        cout << "   STUDENT ANALYTICAL REPORT   " << endl;
        cout << "================================" << endl;
        cout << "Name        : " << name << endl;
        cout << "Roll No     : " << roll << endl;
        cout << "Attendance  : " << attendance << "%" << endl;
        cout << "Final Marks : " << marks << "/100" << endl;
        cout << "Result      : " << calculateGrade() << endl;
        cout << "--------------------------------" << endl;
    }
};

int main() {
    Student s;
    s.input();
    s.displayAnalysis();
    return 0;
}
