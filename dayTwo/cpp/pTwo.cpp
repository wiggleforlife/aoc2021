#include <iostream>
#include <fstream>
#include <vector>

using namespace std;

vector<string> instruct;
int depth = 0;
int x = 0;
int aim = 0;

int main() {
	ifstream in;
	in.open("../../input");
	if (in.is_open()) {
		while(in.good()) {
			string line;
			while(getline(in, line)) {
				cout << line << endl;
				instruct.push_back(line);
			}
		}
	}
	for (int i=0; i < instruct.size(); i++) {
		size_t pos = 0;
		if (instruct.at(i).rfind("forward", 0) == 0) {
			pos = instruct.at(i).find(" ");
			int num = stoi(instruct.at(i).substr(pos, 2));
			x += num;
			depth += aim*num;
		} else if (instruct.at(i).rfind("up", 0) == 0) {
			pos = instruct.at(i).find(" ");
			aim -= stoi(instruct.at(i).substr(pos, 2));
		} else if (instruct.at(i).rfind("down", 0) == 0) {
			pos = instruct.at(i).find(" ");
			aim += stoi(instruct.at(i).substr(pos, 2));
		}
		cout << "X: " << x << ", Depth: " << depth << ", Aim: " << aim << endl;
	}

	cout << "Multiplied: " << x*depth << endl; 

	return 0;
}

