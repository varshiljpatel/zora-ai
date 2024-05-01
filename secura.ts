#!/usr/bin/env node

import {
    ChildProcessWithoutNullStreams as TSpawn,
    spawn as s,
} from "child_process";

const c: TSpawn = s("npm", ["whoami"]);
console.log(process.argv);

function r(c: TSpawn): Promise<boolean> {
    return new Promise((resolve, reject) => {
        let o = "";

        c.stdout.on("data", (data: Buffer) => {
            o += data.toString();
        });

        c.stderr.on("data", (data: Buffer) => {
            const m = data.toString().trim();
            if (m.endsWith("ENEEDAUTH")) {
                reject(
                    new Error(
                        `Error: You are not logged in run "npm login" and continue`
                    )
                );
            }
            reject(new Error(`Error: ${m}`));
        });

        c.on("exit", (n: any) => {
            if (n !== 0) {
                const m = `Fetching user process exited with code ${n}`;
                reject(new Error(m));
            } else {
                const u = o.trim();
                let res = false;
                for (const arg of process.argv.slice(2)) {
                    if (u === arg) {
                        res = true;
                        break;
                    }
                }
                resolve(res);
            }
        });
    });
}

(async () => {
    try {
        const res = await r(c);
        console.log(res);
        return res;
    } catch (e: any) {
        throw new Error(e.message);
        console.log(e.message);
    }
})();
