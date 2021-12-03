#include <iostream>
#include <fstream>
#include <vector>

using namespace std;

vector<string> instruct;
int depth;
int x;

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
			x += stoi(instruct.at(i).substr(pos, 2));
			
		} else if (instruct.at(i).rfind("up", 0) == 0) {
			pos = instruct.at(i).find(" ");
			depth -= stoi(instruct.at(i).substr(pos, 2));
		} else if (instruct.at(i).rfind("down", 0) == 0) {
			pos = instruct.at(i).find(" ");
			depth += stoi(instruct.at(i).substr(pos, 2));
		}
		cout << "X: " << x << ", Depth: " << depth << endl;
	}

	cout << "Multiplied: " << x*depth << endl; 

	return 0;
}
