// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
/*
#include <iostream>
using namespace std;
int main() {
    int a,b;
    while(cin >> a >> b)//注意while处理多个case
        cout << a+b << endl;
}
*/
// 本题为考试多行输入输出规范示例，无需提交，不计分。
/*
#include <iostream>
#include <cstdio>

using namespace std;

int main(){
    //freopen("1.in","r",stdin);
    int n,ans = 0;
    cin >> n;
    for(int i = 0; i < n; i++){
        for(int j = 0; j < n; j++){
            int x; scanf("%d",&x);
            ans += x;
        }
    }
    cout << ans << endl;
    return 0;
}
*/
/*
#include <iostream>
#include <string>
#include <cstring>
using namespace std;
int main()
{
    string s("test string");
    char str[100];
     
    strcpy(str, s.c_str());
     
    cout << str << endl;
    return 0;
}
*/

#include <iostream>

using namespace std;

int main() {
    int N, M;
    bool isChange = true;
    int red = 0;
    cin >> N >> M;
    bool vis[10000][10000];
    for(int i = 0; i < N; ++ i) {
        vis[i][i] = true;
        for(int j = 0; j < i; ++ j) {
            vis[i][j] = false;
            vis[j][i] = false;
        }
    }

    for(int i = 0; i < M; ++ i) {
        int x, y;
        cin >> x >> y;
        vis[x-1][y-1] = true;
    }
    
    while(isChange) {
        isChange = false;
        for(int i = 0; i < N; ++ i) {
            for(int j = 0; j < N; ++ j) {
                if(vis[i][j] == true) {
                    for(int k = 0; k < N; ++ k) {
                        if(vis[j][k] == true) {
                            if(vis[i][k] == false) {
                                vis[i][k] = true;
                                if(isChange == false) {
                                    isChange = true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    for(int i = 0; i < N; ++ i) {
        int m;
        for(m = 0; m < N; ++ m) {
            if(vis[m][i] == false)
                break;
        }
        if(m == N)
            red ++;
    }
    cout << red << endl;
    return 0;
}