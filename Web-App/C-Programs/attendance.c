C-Programs/attendance.c
 #include <stdio.h>

struct Student {
    int roll;
    char name[50];
    float attendance;
};

int main() {
    struct Student s;

    printf("--- Student Registration (C) ---\n");
    printf("Enter Name: ");
    scanf(" %[^\n]s", s.name); // Allows spaces in names

    printf("Enter Roll Number: ");
    scanf("%d", &s.roll);

    printf("Enter Attendance %%: ");
    scanf("%f", &s.attendance);

    printf("\n--- Analysis Report ---\n");
    printf("Name: %s\n", s.name);
    printf("Roll: %d\n", s.roll);
    
    // Simple Analysis
    if(s.attendance < 75) {
        printf("Status: Shortage of Attendance (Low)\n");
    } else {
        printf("Status: Eligible for Exams\n");
    }

    return 0;
}
