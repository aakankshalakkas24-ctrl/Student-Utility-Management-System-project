C-Programs/attendance.c
 #include <stdio.h>

struct Student {
    int roll;
    char name[30];
};

int main() {
    struct Student s;

    printf("Enter Student Name: ");
    scanf("%s", s.name);

    printf("Enter Roll Number: ");
    scanf("%d", &s.roll);

    printf("\nStudent Details\n");
    printf("Name: %s\n", s.name);
    printf("Roll: %d\n", s.roll);

    return 0;
}
