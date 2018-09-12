#include <iostream>
#include <math.h>

using namespace std;

int main() {
    int N;
    int num[4];
    int isValid = 1;
    cin >> N;
    for(int i = 0; i < N; ++ i) {
        cin >> num[i];
    }
    if(N == 1) {
        if((num[0] >> 7) != 0x0) {
            isValid = 0;
        }
    }
    else if(N > 1 && N <= 4){
        int the_pow = 0;
        for(int i = 0; i < N; i ++) {
            the_pow += (int) pow(2, i + 1);
        }
        if((num[0] >> (7 - N)) != the_pow) {
            isValid = 0;
            cout << (num[0] >> (7 - N)) << endl;
        }
        for(int i = 1; i < N; i ++) {
            if((num[i] >> 6) != 0x10) {
                isValid = 0;
                break;
            }
        }
    }
    else {
        isValid = 0;
    }

    cout << isValid << endl;

    return 0;
}