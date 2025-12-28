C-Programs/attendance.c
  #include <stdio.h>

int main() {
    int total, attended;
    float percentage;

    printf("Enter total classes: ");
    scanf("%d", &total);

    printf("Enter attended classes: ");
    scanf("%d", &attended);

    percentage = (attended * 100.0) / total;

    printf("Attendance Percentage = %.2f%%", percentage);

    return 0;
}
