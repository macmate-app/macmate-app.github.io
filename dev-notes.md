## 如何用一个新的 GitHub 用户提交代码

ssh-keygen 一套新的 key， 名字叫做 id_rsa2

```
git config --add --local core.sshCommand 'ssh -i ~/.ssh/id_rsa2'
git config --local credential.helper ""
```

根据我的理解，可以简化为

```
git config core.sshCommand 'ssh -i ~/.ssh/id_rsa2'
git config credential.helper ""
```

### 方法 2

貌似也可以全局更改：

```
ssh-add ~/.ssh/id_rsa_second
git push
ssh-add -d ~/.ssh/id_rsa_second
```

就是先把 key 添加到 ssh agent, 然后这个是全局的修改。
等 push 完之后再把 key 从 ssh agent 删掉。
查看 ssh agent 的 key 的方式：

```
ssh-add -L
```
