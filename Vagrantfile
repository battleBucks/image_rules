# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|

  config.vm.box = "centos/6"

  config.vm.synced_folder ".", "/vagrant", type: "sshfs"
  config.vm.provision "shell",
    path: "~/srvless/scripts/centos-common.sh"

  config.vm.define "serverlessHost" do |serverlessHost|
    serverlessHost.vm.hostname = "serverlessHost-server"
    serverlessHost.vm.network "forwarded_port", guest: 80, host: 8080
    serverlessHost.vm.network "private_network", ip: "192.168.10.2"
    serverlessHost.vm.provision "shell",
      path: "~/srvless/scripts/centos-node.sh"
  end

end
