
## 环境准备

	npm install express jade moment mongoose
	
	npm install bower -g
	
	bower install bootstrap(git bash执行)


## 遇到的问题

>Error: Cannot find module 'body-parser'

解决办法：使用cnpm

>安装 cnpm

*因为npm安装插件是从国外服务器下载，受网络影响大，可能出现异常，如果npm的服务器在中国就好了，所以我们乐于分享的淘宝团队干了这事。32个赞！来自官网：“这是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步*。
	
	npm install cnpm -g --registry=https://registry.npm.taobao.org

*注：cnpm跟npm用法完全一致，只是在执行命令时将npm改为cnpm（以下操作将以cnpm代替npm）。*

>再次安装 *laravel-elixir*

	cnpm install body-parser

正常安装，运行



## mongodb 


>插入数据

![](https://github.com/zxx1988328/node_project/blob/master/img/insert_data.png)

>删除数据

![](https://github.com/zxx1988328/node_project/blob/master/img/delete_data.png)


## 修改样式文件路径

>增加**.bowerrc**文件，内容如下

	{
    	"directory":"public/libs"
	}

>运行命令  bower install bootstrap,这样文件会下载到指定的文件夹下，如下图

![](https://github.com/zxx1988328/node_project/blob/master/img/stylefile.png)


	npm install grunt-cli
	npm install grunt-concurrent
	npm install grunt-contrib-watch
	npm install grunt-nodemon