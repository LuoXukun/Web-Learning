#include <iostream>

using namespace std;

int team[1000][1000];
bool vis[1000][1000];

void check(int x, int y, int num) {
    vis[x][y] = true;
    if(x - 1 >= 0) {
        if(vis[x-1][y] == false && team[x-1][y] == 1) {
            check(x-1, y, num);
        }
    }
    if(y + 1 < num) {
        if(vis[x][y+1] == false && team[x][y+1] == 1) {
            check(x, y+1, num);
        }
    }
    if(x + 1 < num) {
        if(vis[x+1][y] == false && team[x+1][y] == 1) {
            check(x+1, y, num);
        }
    }
    if(y - 1 >= 0) {
        if(vis[x][y-1] == false && team[x][y-1] == 1) {
            check(x, y-1, num);
        }
    }
    return;
}

int main() {
    int M;
    int the_count = 0;
    cin >> M;
    for(int i = 0; i < M; ++ i) {
        for(int j = 0; j < M; ++ j) {
            cin >> team[i][j];
            vis[i][j] = false;
        }
    }
    for(int i = 0; i < M; i ++) {
        for(int j = 0; j < M; j ++) {
            if(vis[i][j] == false && team[i][j] == 1) {
                the_count ++;
                check(i, j, M);
            }
        }
    }
    cout << the_count << endl;
    return 0;
}